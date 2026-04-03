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

                    <div className="obj-wrapper">
                        <span
                            className='heading'
                        >Suggested for you: </span>
                        <p
                            className='opt-items'
                        >
                            {output.title}
                        </p>
                    </div>

                    <div className="obj-wrapper">
                        <span
                            className='heading'
                        >Items you need: </span>
                        {
                            output.ingredients.map((item) => (
                                <p
                                    className='opt-items'
                                >
                                    {item}
                                </p>
                            ))
                        }

                    </div>


                    <div className="obj-wrapper">
                        <span
                            className='heading'
                        >How to cook: </span>
                        {
                            output.steps.map((item,index) => (
                                <p
                                    className='opt-items'
                                >
                                    Step {index+1}: {item}
                                </p>
                            ))
                        }
                    </div>


                    <div className="obj-wrapper">
                        <span
                            className='heading'
                        >Nutrition: </span>
                        {
                            Object.keys(output.nutrition).map(item => (
                                <p
                                    className='opt-items'
                                >
                                    {item}: {output.nutrition[item]}
                                </p>
                            ))
                        }
                    </div>


                    <div className="obj-wrapper">
                        <span
                            className='heading'
                        >Dietary Tags: </span>
                        {
                            output.dietaryTags.map(item => (
                                <p
                                    className='opt-items'
                                >
                                    {item}
                                </p>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ChatUI