export function AboutMe() {
  return (
    <div class="col-12 col-md-6 col-lg-6 text-center">
      <h2 className="fw-bold text-center mb-4">About me</h2>
      <div className="text-center p-4 rounded-5" id="paragraph2">
        <img
          class="wobble-hor-bottom my-4 rounded-circle"
          width="200px"
          height="200px"
          id="fred-photo"
          src="images/fred-image2.webp"
          alt="Fred's Photo"
        />
        <p>
          Hello there! I’m Fred David, Web Developer/Programmer.
          <br />
          <br />
          I’m a Front-end developer, aiming to learn as much as possible in the
          front-end part to then long-term aim at being considered a Full-stack
          developer with the projects I make along the way and the Back-end
          languages I learn.
          <br />
          <br />I specialize on <span className="react-color">React</span>, and
          I’m very invested in making code as efficient as possible to further
          enhance productivity individually and team-based.
        </p>
      </div>
    </div>
  );
}
