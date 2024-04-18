import {useState} from "react";

function Contact() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');

  function handleBtnClick(e) {
    e.preventDefault();
    }
    
    return <main>
      <section className="contact page">
        <form>
          <input
            name="name"
            placeholder="Name"
            onChange={e => setName(e.target.value)}/>
          <input
            name="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}/>
          <textarea
            cols="70"
            rows="15"
            placeholder="Message"
            onChange={e => setMessage(e.target.value)}/>
            <button
            onClick={handleBtnClick} >Submit</button>
        </form>
      </section>
    </main>
}

export default Contact;