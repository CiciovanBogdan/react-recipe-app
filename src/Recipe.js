import React from "react";
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className={style.image} src={image} alt='food' />
        </div>
    );
}

export default Recipe;