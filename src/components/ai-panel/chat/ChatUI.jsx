import React from 'react'
import './chatUI.css'
const ChatUI = ({ input, output }) => {
    return (
        <div className='chat-ui-wrapper'>
            <div className="input-wrapper">
                <div className="inp-msg-bub">
                    {input}
                </div>
            </div>


            <div className="output-wrapper">
                <div className="oup-msg-bub">

                    <div className="recipe-section">
                        <div className="deitTags">
                            {output.dietaryTags[0] && output.dietaryTags.map((tags, i) => (
                                <span key={i}>{tags}</span>
                            ))}
                        </div>
                        <h2>{output.title}</h2>
                    </div>

                    <div className="recipe-section">
                        <h3>Health Insights</h3>
                        <div className="stats-boxes">
                            <div className="stat-inner">
                                <span>{output.nutrition.calories}</span>
                                <p>kcal</p>
                            </div>
                            <div className="stat-inner">
                                <span>{output.nutrition.protein}</span>
                                <p>protein</p>
                            </div>
                            <div className="stat-inner">
                                <span>{output.nutrition.carbs}</span>
                                <p>carbs</p>
                            </div>
                            <div className="stat-inner">
                                <span>{output.nutrition.fat}</span>
                                <p>fat</p>
                            </div>
                        </div>
                    </div>

                    <div className="recipe-section">
                        <h3>What You’ll Need</h3>
                        <ul>
                            {output.ingredients.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>


                    <div className="recipe-section">
                        <h3>Cooking Instructions</h3>
                        {output.steps.map((item,i) => (
                            <div key={i} className="instruction-box">
                                <span>Step {i+1}</span>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ChatUI