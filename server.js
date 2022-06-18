const user = require("./models/Task");
const Cart = require("./models/cart");
const connectDB = require("./db/connect");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const express = require("express");
const orders = require("./models/Orders");
const path = require("path");

const helmet = require("helmet");

var xss = require("xss-clean");



require("dotenv").config();
const stripe = require("stripe")(
  "sk_test_51KrilsFqPsnFWplW8NRVd4i7qkgrVDYM7kBTmeNMmwyMJOgl6l2AQz2IoptIbifJhdxawwVK9jSjPTsBnzRDZMYY00RHiYsZuL"
);

const authMiddleware = require('./middleware/auth');


const app = express();

app.use(express.json());



app.use(
  cors({
    origin: true,
    credentials: true,
  })
);



app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  const token = request.body;

  console.log("payment request recieved BOOM", total);
  // console.log(token.id);
  //const idempontencyKey = uuid()

  const payment = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: payment.client_secret,
  });
});








app.post("/api/v1/auth/login", async (request, response) => {
  try {
    const { email, password } = request.body;

    if (!email || !password) {
    return response.status(400).send({
      msg1: `please provide Email and password`,
    });
    }

    const users = await user.findOne({email})

    if (!users){
    return   response.status(500).send({ msg: "no user with the below credentials.. check again/sign-up" });
    }

    const isPasswordCorrect  = await users.comparePassword(password)
 if (!isPasswordCorrect) {
 return  response.status(500).send({ msg2: "invalid credentials please check password" });
 }

    const token = users.createJWT();
 
    
 return   response.status(200).send({ user: { name: users.name }, token });
  } catch (error) {
  return response
    .status(400)
    .send({ msg: "user does not exist please register" });
  }
});



app.post("/api/v1/auth/register", async (request, response) => {
  
  
  try {
     const { email, password, name } = request.body;
  if (!email & !password & !name) {
    return response.status(400).send({
      msg: `please provide neccessary credentials`,
    });
  }  

 if (!email) {
   return response.status(400).send({
     msg1: `please provide Email`,
   });
 }
  if (!password) {
    return response.status(400).send({
      msg2: `please provide password`,
    });
  }
   if (!name) {
     return response.status(400).send({
       msg3: `please provide username`,
     });
   }

 const users = await user.create({ ...request.body });
console.log(users);
   const token = users.createJWT()

 response
   .status(200)
   .json({ user: { name: users.name, email: users.email }, token });
  

   
  } catch (error) {response.status(500).send({msg:error})}
});










app.get("/api/v1/user", authMiddleware, async (request, response) => {
  try {
    const cart = await user.find({ createdBy: request.user.userId });
    return response
      .status(200)
      .send({ username: request.user.name  });
  } catch (error) {}
});


app.get ("/api/v1/amazon", authMiddleware, async (request, response) => {
try {
  const cart = await Cart.find({ createdBy: request.user.userId }).sort(
    "createdAt"
  );
 
 return  response.status(200).send({ cart, count: cart.length})
} catch (error) {
  
} 
})


app.get("/api/v1/amazon/orders", authMiddleware, async (request, response) => {
  try {
   
    const cart = await orders
      .find({ createdBy: request.user.userId })
      .sort("createdAt");

    return response.status(200).send({ cart,  count: cart.length});
  } catch (error) {}
});


app.get("/api/v1/amazon/:id", authMiddleware, async (request, response) => {
  try {
    const {user:{userId}, params:{id:jobId}} = request

    const cart = await Cart.findOne({
      _id:jobId,createdBy:userId
    })
  
    
    if(!cart){
   response.status(400).send(`no job with id ${cart}`);
    }
     
     return response.status(200).send({ cart });
  } catch (error) {
    response.status(400).send(`no job`);
  }
 
});

app.post("/api/v1/amazon", authMiddleware, async (request, response) => {
  try {
    request.body.createdBy = request.user.userId
   
    
    const cart = await Cart.create(request.body );
 console.log(cart)
  return   response.status(200).send({cart, add});
  } catch (error) {
    
  }
  response.send(request.body);
});



app
  .post(
    "/api/v1/amazon/products",
    authMiddleware,
    async (request, response) => {
      try {
         request.body.createdBy = request.user.userId;
      


  const cart = await orders.create(request.body );
    
    
       return response.status(200).send({ cart }); 
      } catch (error) {}
   response.send(request.body);
    }
  )
  ;


app.post("/api/v1/amazon/get", authMiddleware, async (request, response) => {
  try {
     request.body.createdBy = request.user.userId;
    const username = request.body.data;
  
  
    orders.find((err, result) => {
      if (err) {
        console.log(error);
      } else {
        const userOrders = result.filter(
          (order) => order.username === username
        );

        return response.send(userOrders);
      }
    });
  } catch (error) {}
});




app.patch("/api/v1/amazon/:id", authMiddleware, async (request, response) => {

  try {
    const {
      body:{title, image},
      user: { userId },
      params: { id: jobId },
    } = request;

    if(title=== "" || image ===""){
      response.status(400).send(`title or image cannot be empty`);
    }
    const cart = await Cart.findByIdAndUpdate({
      _id: jobId,
      createdBy: userId,
    }, request.body, {new:true, runValidators:true});

      
    if (!cart) {
      response.status(400).send(`no job with id ${cart}`);
    }

    return response.status(200).send({ cart });
  } catch (error) {
    
  }
 
});

app.delete("/api/v1/amazon/:id", authMiddleware, async (request, response) => {
 try {
   const {
     user: { userId },
     params: { id: jobId },
   } = request;
const cart = await Cart.findByIdAndDelete({
  _id:jobId,createdBy:userId
})
    if (!cart) {
      response.status(400).send(`no job with id ${cart}`);
    }

    return response.status(200).send();
 } catch (error) {
   
 }
});






if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (request, response) => {
    response.sendFile(
      path.join(__dirname, "client", "build", "index.html")
    );
  });
} else {
  app.get('/', (req, res) => {
    res.send("Api running")
  })
}






const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
