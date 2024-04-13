import { useEffect, useState } from "react";
import NewsItem from "../NewsItem";
import axios from "axios";
import Loader from "../Loader";


export default function News(props) {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        fetchApi();
        document.title = props.category
    }, [currentPage])

    function fetchApi() {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&page=${currentPage}&pageSize=5&apiKey=${props.apiKey}`;
        setLoader(true)
        axios.get(url)
            .then((response) => {
                console.log(response);
                setData(response.data.articles)
                props.setProgress(100)
                setLoader(false)
            })
            .catch((error) => {
                console.log(error);
            })

    }

    function handleNextPage() {
        setCurrentPage(currentPage + 1);
        console.log("Next");
    }

    function handlePrevPage() {
        setCurrentPage(currentPage - 1)
    }

    return (
        <>

            <h1 className="text-3xl flex mt-3 items-center justify-center ">Pakistan Times - Top Headlines</h1>
            <div className="flex flex-row flex-wrap justify-center gap-12 mt-8  ">
                {loader && <Loader />}
                {!loader && data.map((news, id) => {
                    return (
                        <div key={id} className="flex w-full md:w-[24rem]">
                            <NewsItem image={news.urlToImage} title={news.title} description={news.description} url={news.url} author={news.author} date={news.publishedAt} />
                        </div>
                    )
                })}
            </div>

            <div className="flex justify-around mt-7">
                <button disabled={currentPage === 1} className="btn btn-primary" onClick={handlePrevPage}>Previous</button>
                <button className="btn btn-primary" onClick={handleNextPage}>Next</button>
            </div>

        </>
    )
}

