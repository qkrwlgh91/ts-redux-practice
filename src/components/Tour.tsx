import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Tour() {

    type TourList = {
        id: number,
        name: string,
        title: string,
        location: string,
        people: number,
        gather: number,
        detail: string
    };

    const [tourList, setTourList] = useState<TourList>(
        {
            id: 1,
            name: 'tester1',
            title: 'first tour',
            location: 'London',
            people: 5,
            gather: 2,
            detail: 'only girl kkk'
        }
    )

    return (
        <section>
            <header className="tour">
                <div className="tour__header">Korea Tour List</div>
                
            </header>
            <article className="tour__article" >
                검색기능
                <div>
                    <button>
                        <Link to="/tour-plan">
                            Let's plan
                        </Link>
                    </button>
                </div>
                <div className="tour__article--list" >
                    <Link to="/tour-detail">
                        <ul>
                            <li>{tourList.title}</li>
                            <li>작성자 : {tourList.name}</li>
                            <li>여행 지역 : {tourList.location}</li>
                            <li>{tourList.detail}</li>
                            <li>모집인원 : {tourList.gather} / {tourList.people}</li>
                        </ul>
                    </Link>
                </div>
            </article>
        </section>
    )
}

export default Tour;
