export default function About() {
  return (
    <div className="container mt-3">
      <h1 className="text-center">About Me</h1>
      <div className="row">
        <div className="col-sm-3 text-center p-3">
          <img src="./src/assets/me.jpg" className="img-fluid" alt="portrait image of Jesus Briseno" />
        </div>
        <div className="col-sm-9 p-3">
          <p>
            Hello! My name is Jesus Briseno, a 23-year-old enthusiast with a fresh perspective in the tech industry. 
            Having recently graduated, I'm transitioning careers towards web development, fueled by an intensive 6-month 
            Full Stack Web Development Bootcamp. I'm proficient in a variety of web development technologies, from HTML, 
            CSS, and JavaScript to advanced frameworks like React, which I used to create this site!
            <br />
            <br />
            During my bootcamp experience, I've tackled several projects which not only solidified my coding skills but also 
            honed my problem-solving abilities. For instance, [Project Name], featured in my Portfolio, showcases my ability 
            to integrate backend and frontend development seamlessly.
            <br />
            <br />
            I am on a constant lookout for new challenges and opportunities to grow. Whether it's collaborating on innovative 
            projects or finding my next professional adventure, I'm eager to connect. 
            <br />
            <br />
            Feel free to reach out via the Contact section, where a form awaits your message. Also, don't forget to review my 
            Resume for a detailed look at my journey so far. 
            <br />
            <br />
            Thank you for visiting, and I hope we can connect soon!
          </p>
        </div>
      </div>
    </div>
  );
}