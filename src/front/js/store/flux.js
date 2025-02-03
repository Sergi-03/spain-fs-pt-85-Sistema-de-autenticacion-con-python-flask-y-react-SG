import { Navigate } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			auth: false,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			login: async (email, password) => {


				const myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				const raw = JSON.stringify({
					"email": email,
					"password": password
				});

				const requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				try {
					const response = await fetch("https://verbose-zebra-g45g9j9wj4r52v6pw-3001.app.github.dev/api/login", requestOptions);
					const result = await response.json();
					
					

					if (response.status === 200) {
						localStorage.setItem("token", result.access_token)
						setStore({auth: true})
						return true
					}
				} catch (error) {
					console.error(error);
					return false;
				};
			},
			getProfile: async () => {
				let token = localStorage.getItem("token")
				try {
					const response = await fetch("https://verbose-zebra-g45g9j9wj4r52v6pw-3001.app.github.dev/api/profile", {
						method: "GET",
						headers: {
							"Authorization": `Bearer ${token}`
						},
					});
					const result = await response.json();
					console.log(result)
				} catch (error) {
					console.error(error);
				};
			},
			tokenVerify: async () => {
				//crear un nuevo endpoint que se llame verificacion de token
				//la peticion en la funcion tokenVerify del front deberia actualizar un estado auth:
				const token = localStorage.getItem("token")

				if(!token) {
					setStore({auth: false})
				    return false
				}

				try {
					const response = await fetch ("https://verbose-zebra-g45g9j9wj4r52v6pw-3001.app.github.dev/api/token_verify",{
						method: "GET",
						headers: {
							"Authorization": `Bearer ${token}`
						}
					})

					const result = await response.json()

					if(response.status === 200) {
						console.log("Valid token", result);
						
						setStore({auth: true})
						return true
					}

					else{
						console.log("Invalid Token");
						
						setStore({auth: false})
						return false
					}
					

				} catch (error) {
					console.error("Error verifying Token")
					setStore({auth: false})
					return false
				}
			},
			logout:()=>{
				//borrar el token del localStorage
				localStorage.removeItem("token")
				setStore({auth: false})
			},
			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
