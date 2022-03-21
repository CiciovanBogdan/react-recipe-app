import React from "react";
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1 className="title">{title}</h1>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ul>
            <p>{calories}</p>
            <img className={style.image} src={image} alt="some food" />
        </div>
    );
};

export default Recipe;