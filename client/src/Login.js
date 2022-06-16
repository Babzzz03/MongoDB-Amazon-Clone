import React, { useState } from 'react'
import "./Login.css"

import { Link, useHistory } from 'react-router-dom'

import axios from 'axios';
import { useStateValue } from './StateProvider';
import Header from './Header';
import { axiosInstance } from './Config';

function Login() {
  const [{}, dispatch] = useStateValue();
  const history = useHistory();
  
  const [email, setEmail] = useState("");
  const [password, setPasaword] = useState("");
  const [error, setError] = useState("");
   const [error2, setError2] = useState("");
   const [error3, setError3] = useState("");

  async function signIn(e) {
    e.preventDefault();

    axiosInstance
      .post(`/v1/auth/login`, {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);

        alert("Welcome back");

        history.push("/");
      })
      .catch((err) => {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (err.response) {
          setError(err.response.data.msg);
          setError2(err.response.data.msg1);
          setError3(err.response.data.msg2);
        
        }
      });
    
  }

  /*auth
.signInWithEmailAndPassword(email,password)
.then(auth => {
    history.push('/')



    authUser?
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      :
        dispatch({
          type: "SET_USER",
          user: null,
        })





useEffect(() => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const fetchData = async () => {
    try {
      axios
        .get("http://localhost:3000/api/v1/user", config)
        .then((response) => {
          setUser(response.data.username);
        })
      
        .catch((error) => {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  };
  fetchData();
}, [setUser]);












async function signIn(e) {
       e.preventDefault();

       try {
         await axios.post("http://localhost:3000/api/v1/auth/login", {
           name,
         });

         setUser(response)
          console.log(User);
       } catch (error) {
         console.log(error);
       }
      
         setEmail("");
         setName("");
         setPasaword("");
         history.push("/");
     }


     
     async function register(e) {
       e.preventDefault();

       try {
         await axios.post("http://localhost:3000/api/v1/auth/register", {
           name,
           email,
           password,
         });
           setUser(response);
           console.log(User);
       } catch (error) {
         console.log(error);
       }
       setEmail("")
       setName("");
       setPasaword("");
       history.push("/");
     }





https://levelup.gitconnected.com/fetch-api-data-with-axios-and-display-it-in-a-react-app-with-hooks-3f9c8fa89e7b






ANOTHER PONE FRO  THE BACK END 

app.get("/api/v1/user", authMiddleware, async (request, response) => {
  try {
    const cart = await user.find({ user: request.user.userId });
    return response
      .status(200)
      .send({ username: request.user.name, cart });
  } catch (error) {}
});



componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }






  const address = request.body.address;
        const products = request.body.basket;
        const price = request.body.price;
        const username = request.body.username.username;


        const orderDetail = {
          products: products,
          price: price,
          username: username,
          address: address,
        };

      








useEffect(() => {
    // DELETE request using axios inside useEffect React hook
    axios.delete('https://reqres.in/api/posts/1')
        .then(() => setStatus('Delete successful'));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);



import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person.id}>{person.name}</li>
            )
        }
      </ul>
    )
  }
}







 <ShoppingBasketIcon />





export const initialState= {
basket: [],
user: null

};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)
















 .then((res) => {
        setUser(res.data.user.name);
        console.log(User);
      })




  axios.delete(
    "/api/v1/amazon/${id}",
  
    config
  );




axios.patch(url, data, {
   headers: {
    authorization: accessToken,
   },
})





 onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });




})
.catch(error => alert(error.mesage))*/
console.log(error)
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG21.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <p className={error ? "login__active__alert" : "login__alert"}>
         ! {error}
        </p>
        <div>
          <h5>E-mail</h5>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className={error2 ? "login__active__alert" : "login__alert"}>
            {error2}
          </p>
          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPasaword(e.target.value)}
          />
          <p className={error3 ? "login__active__alert" : "login__alert"}>
            {error3}
          </p>
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </div>

        <p>
          By signing in you agree to AMAZON FAKE CLONE condition of use and
          sale. please see our privacy Notice, our Cookies Notice and our
          interest-based Ads Notice
        </p>
      </div>
      <div className="create__account__container">
        <div className="line">
          <hr className="horizontal" />
          <h3 className="line__tag">New to amazon clone?</h3>
          <hr className="horizontal" />
        </div>
        <Link to="/create-account">
          <button className="login__registerButton">
            Create your Amazon Account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;