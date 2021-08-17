import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <RadioButtonUncheckedIcon />
            </div>

            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>

            {newsArticle ("Top news", "News body goes here...")}
            {newsArticle ("Tesla stock", "News body goes here...")}
            {newsArticle ("New Iphone", "News body goes here...")}
            {newsArticle ("Covid19 UK", "News body goes here...")}
        </div>
    );
}

export default Widgets;
