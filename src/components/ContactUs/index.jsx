import './contactus.css';

const ContactUs = () => {
    return (
        <div className="contactus-container">
            <form name="contact" method="POST" data-netlify="true">
                <label>Name</label><br />
                <input type="text" name="name" /><br /><br />

                <label>Email</label><br />
                <input type="email" name="email" /><br /><br />

                <label>Phone Number</label><br />
                <input type="tel" name="phone" /><br /><br />

                <label>Query</label><br/>
                <textarea name="query" />
                <br/><br/>

                <button type="submit">Send</button>
        </form>
        </div>
    );
}

export default ContactUs;
