import React, { act } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { set } from 'mongoose';
const faqData = [
    { id: 1, question: "Mauris congue euismod purus at semper. Morbi et vulputate massa?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut magni, deserunt cupiditate sunt enim harum eaque modi numquam ullam quisquam voluptatibus quo temporibus ut error iusto dolore perferendis esse!" },
    { id: 2, question: "Donec mattis finibus elit ut tristique?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut magni, deserunt cupiditate sunt enim harum eaque modi numquam ullam quisquam voluptatibus quo temporibus ut error iusto dolore perferendis esse!" },
    { id: 3, question: "Aenean elit orci, efficitur sed nisl vitae, interdum maximus nisl?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut magni, deserunt cupiditate sunt enim harum eaque modi numquam ullam quisquam voluptatibus quo temporibus ut error iusto dolore perferendis esse!" },
    { id: 4, question: "Pellentesque habitant morbi tristique senectus et netus?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut magni, deserunt cupiditate sunt enim harum eaque modi numquam ullam quisquam voluptatibus quo temporibus ut error iusto dolore perferendis esse!" },
    { id: 5, question: "Nam pellentesque aliquam metus?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut magni, deserunt cupiditate sunt enim harum eaque modi numquam ullam quisquam voluptatibus quo temporibus ut error iusto dolore perferendis esse!" },
    { id: 6, question: "Aenean elit orci, efficitur quis nisl at?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut magni, deserunt cupiditate sunt enim harum eaque modi numquam ullam quisquam voluptatibus quo temporibus ut error iusto dolore perferendis esse!" },
    { id: 7, question: "Morbi gravida, nisi id fringilla ultricies, elit lorem?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut magni, deserunt cupiditate sunt enim harum eaque modi numquam ullam quisquam voluptatibus quo temporibus ut error iusto dolore perferendis esse" },
];
const Faq = () => {
    const [activeId, setActiveId] = useState(1);

    const setId = (id) =>{
        setActiveId(activeId === id ? null : id);
    }
    return (
        <>
            <div className="pos_page">
                <div className="container">

                    <div className="pos_page_inner">

                        <Header />

                        <div className="breadcrumbs_area">
                            <div className="row">
                                <div className="col-12">
                                    <div className="breadcrumb_content">
                                        <ul>
                                            <li><a href="index.html">home</a></li>
                                            <li><i className="fa fa-angle-right"></i></li>
                                            <li>Frequently Questions</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="faq_content_area">
                            <div className="row">
                                <div className="col-12">
                                    <div className="faq_content_wrapper">
                                        <h4>Below are frequently asked questions, you may find the answer for yourself</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat sagittis, faucibus metus malesuada, eleifend turpis. Mauris semper augue id nisl aliquet, a porta lectus mattis. Nulla at tortor augue. In eget enim diam. Donec gravida tortor sem, ac fermentum nibh rutrum sit amet. Nulla convallis mauris vitae congue consequat. Donec interdum nunc purus, vitae vulputate arcu fringilla quis. Vivamus iaculis euismod dui.</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    <div class="accordion_area">
                            <div class="row">
                                <div class="col-12"> 
                                    <div className="class__accordion">
                                        {faqData.map((item) => (
                                            <div key={item.id} className="accordion-item card card_dipult" >
                                                <div class="card-header card_accor" id="headingOne">
                                                    <button className={`btn btn-link ${activeId === item.id ?  "" : 'collapsed'}`} onClick={() => setId(item.id)}>{item.question}
                                                        <i class={`fa fa-${activeId === item.id ? 'minus' : 'plus'}`}></i>
                                                    </button>
                                                </div>
                                                {activeId === item.id && (
                                                    <div className={`collapse ${activeId === item.id ? 'show' : ''}`} >
                                                        <div className=" card-body">
                                                            <p>{item.answer}</p>
                                                        </div>
                                                    </div>
                                                )}

                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Faq