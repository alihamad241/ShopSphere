import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { set } from 'mongoose'
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [phone, setPhone] = useState('');
    
    const handeSubmit = (e) => {
        e.preventDefault();
        console.log({name, email, message, subject, phone});
    }
    return (
        <div>
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
                                            <li>contact</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact_area">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="contact_message">
                                        <h3>Tell us your project</h3>
                                        <form id="contact-form" method="POST" action="assets/mail.php">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <input name="name" placeholder="Name *" type="text"  onChange={(e) => setName(e.target.value)} />
                                                </div>
                                                <div className="col-lg-6">
                                                    <input name="email" placeholder="Email *" type="email" onChange={(e) => setEmail(e.target.value)}/>
                                                </div>
                                                <div className="col-lg-6">
                                                    <input name="subject" placeholder="Subject *" type="text" onChange={(e) => setSubject(e.target.value)} />
                                                </div>
                                                <div className="col-lg-6">
                                                    <input name="phone" placeholder="Phone *" type="text" onChange={(e) => setPhone(e.target.value)} />
                                                </div>

                                                <div className="col-12">
                                                    <div className="contact_textarea">
                                                        <textarea placeholder="Message *" name="message" className="form-control2" onChange={(e) => setMessage(e.target.value)} ></textarea>
                                                    </div>
                                                    <button type="submit" onClick={handeSubmit}> Send Message </button>
                                                </div>
                                                <div className="col-12">
                                                    <p className="form-messege"></p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="contact_message contact_info">
                                        <h3>contact us</h3>
                                        <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human.</p>
                                        <ul>
                                            <li><i className="fa fa-fax"></i>  Address : No 40 Baria Sreet 133/2 NewYork City</li>
                                            <li><i className="fa fa-phone"></i> <a href="#">Infor@roadthemes.com</a></li>
                                            <li><i className="fa fa-envelope-o"></i> 0(1234) 567 890</li>
                                        </ul>
                                        <h3><strong>Working hours</strong></h3>
                                        <p><strong>Monday – Saturday</strong>:  08AM – 22PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="contact_map">
                            <div className="row">
                                <div className="col-12">
                                    <iframe src="https://www.google.com/maps/embed?pb" width="500" height="450" style={{ border: 0 }} allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>
                <Footer />
            </div>



        </div>
    )
}

export default Contact