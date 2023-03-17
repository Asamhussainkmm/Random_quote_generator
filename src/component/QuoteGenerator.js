import React, { useEffect, useState } from 'react'
import { fetchQuotes } from '../utils/http-utils';
import './QuoteGenerator.css'

function QuoteGenerator() {

    const [quote, setQuote] = useState({
        msg: "Build your brand with TeraUnits",
        author: "TeraUnits"
    });


    const getData = () => {
        let number = Math.floor(Math.random() * 1643);
        fetchQuotes().then(response => {
            let quo = response.data[number].text;
            let author = response.data[number].author;
            setQuote({
                msg: quo,
                author: author

            });
        });
    };


    const onHandleSubmit = (event) => {
        getData();
        event.preventDefault();
    }


    return (
        <form onSubmit={onHandleSubmit}>
            <p><span>🙶 </span>{quote.msg}<span> 🙷</span></p>
            <label><span>« </span>{quote.author}<span> »</span></label><br />
            <input type="submit" value="Generate" />
            <p></p>
        </form>
    )
}

export default QuoteGenerator