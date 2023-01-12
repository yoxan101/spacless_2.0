const ContactUs = () => {
    return ( 
    
        <section className="contactUsCon">
            <div className="contactUsForm">
                <form id="contactUs">
                    <h1>Contact Us</h1>
                    <input className="contactFormInput" type="text" name="name" placeholder="type your name here..."></input>
                    <input className="contactFormInput" type="text" name="surname" placeholder="type your surname here..."></input>
                </form>
            </div>

        </section> 
    
    );
}
 
export default ContactUs;