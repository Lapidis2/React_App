import { useState } from "react";
import style from "./main.module.css";

export function Main() {
  const [ingredients, setIngredients] = useState(["flour", "sugar", "milk"]);
  const [newIngredient, setNewIngredient] = useState("");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [show, setShow] = useState(false);
  const [showFavorite, setShowFavorite] = useState(false);
  const [color, setColor] = useState("");
  const [messages, setMessages] = useState(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"]);

 
  function determineMessage() {
    if (messages.length === 0) {
      return "You have no messages";
    } else if (messages.length === 1) {
      return "You have 1 message";
    } else {
      return `You have ${messages.length} messages`;
    }
  }


  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
	setForm({ name: "", email: "", password: "" });
  };


  const addIngredient = (e) => {
    e.preventDefault(); 
    if (newIngredient.trim() !== "") {
      setIngredients([...ingredients, newIngredient]);
      setNewIngredient(""); 
    }
  };


  const toggleRecipe = () => {
	setShow((prevShow) => !prevShow);

  };
 const togglefavorite = () => {
	setShowFavorite((prevShowFavorite) => !prevShowFavorite);

 }
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        {/* Ingredient Form */}
        <form onSubmit={addIngredient} className={style.form}>
          <input
            type="text"
            placeholder="e.g Orange"
            aria-label="Add ingredient"
            name="ingredient"
            value={newIngredient}
            onChange={(e) => setNewIngredient(e.target.value)}
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add Ingredient
          </button>
        </form>

        {/* Ingredient List */}
		
        {ingredients.length > 0 && (
          <section className={style.centerContainer}>
            <h3>Ingredients on hand:</h3>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            {/* Show Recipe Section if More Than 3 ingredients */}
            {ingredients.length > 3&& (
              <div className={style.recipeContainer}>
                <h4>Ready for Recipe</h4>
                <p>Generate recipe from list of ingredients</p>
                <button onClick={toggleRecipe} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                  {show ? "Hide Recipe" : "Get Recipe"}
                </button>
              </div>
            )}
          </section>
        )}

        {/* Recipe Section (Toggled) */}
        {show && (
          <section className={style.recipe}>
            <h2>🍰 Simple Cake Recipe 🍰</h2>
            <p>Now that you have enough ingredients, you can make a delicious cake! 🥳</p>
            <ol>
              <li>Preheat your oven to 180°C (350°F).</li>
              <li>In a bowl, mix <strong>flour</strong>, <strong>sugar</strong>, and <strong>butter</strong>.</li>
              <li>Add <strong>eggs</strong> and <strong>milk</strong>, then stir until smooth.</li>
              <li>Pour into a greased baking pan.</li>
              <li>Bake for 30-35 minutes or until golden brown.</li>
              <li>Let it cool, then enjoy your homemade cake! 🎂</li>
            </ol>
          </section>
        )}

     <div className={style.centerContainer}>
		 {/* Sign-Up Form */}
		 <div className={style.formContainer}>
        <form onSubmit={handleSubmit} className={style.signUpForm}>
          <h1>Sign Up Form</h1>
          <div className={style.inputGroup}>
            <label htmlFor="name">Full-Names:</label>
            <input type="text" id="name" placeholder="Your names" value={form.name} onChange={handleChange} />
          </div>
          <div className={style.inputGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Your email here" value={form.email} onChange={handleChange} />
          </div>
          <div className={style.inputGroup}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter your password" value={form.password} onChange={handleChange} />
          </div>
          <button type="submit" className={style.submitBtn}>Submit</button>

          {/* Favorite Color Selection */}
          <div>
            <label htmlFor="selectColor">What is your favorite color?</label>
            <select name="selectColor" value={color} onChange={(e) => setColor(e.target.value)}>
              <option value="" disabled>
                ---Choose from below---
              </option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="blue">Blue</option>
              <option value="yellow">Yellow</option>
            </select>
          </div>
        </form>

        {/* Show/Hide Favorite Section */}
        <div className={style.favorite}>
          <h5>Below is where to show and hide something based on condition</h5>
          {showFavorite &&
		   <div>
              <h2>This is my Favorite</h2>
		  <img src="/images/starFilled.jpg" alt="favorite" />
		  </div>
		 
		  }
		  
          <button onClick={togglefavorite} className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
            {showFavorite ? "Hide Favorite" : "Show Favorite"}
          </button>

          {/* Message Counter */}
          <h2>{determineMessage()}</h2>
        </div>
      </div>
	 </div>


		
      </div>

     
    </>
  );
}
