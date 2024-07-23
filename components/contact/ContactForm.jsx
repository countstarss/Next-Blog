import classes from './ContactForm.module.css'

function ContactForm() {

    function onSubmitHandler(event) {
        event.preventDefault();
    }

    return <section className={ classes.contact }>
        <h1>How can i help you?</h1>
        <form className={ classes.form } onSubmit={onSubmitHandler}>
            <div className={ classes.controls }>
                <div className={ classes.control }>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" name="eamil" id="email" required/>
                </div>
                <div className={ classes.control }>
                    <label htmlFor="email">Your Name</label>
                    <input type="text" name="name" id="name" required/>
                </div>
            </div>

            <div className={ classes.control }>
                <label htmlFor="message">Message</label>
                <textarea type="text" name="message" id="message" rows={5} required/>
            </div>
            <div className={ classes.actions }>
                <button>Send Message</button>
            </div>
        </form>
    </section>
}

export default ContactForm;
