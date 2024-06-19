function App({ quantity }) {
  const handleCheckout = () => {
    fetch("http://localhost:8000/api/user/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authentication: `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        items: [{ name: "Contextify Tokens", quantity }],
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  };
  return (
    <div className="App">
      <div className="navbar">
        <button onClick={handleCheckout}>Book Now</button>
      </div>
    </div>
  );
}

export default App;
