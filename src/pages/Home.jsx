export default function Home() {
  return (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px', maxWidth: '600px', width: '100%' }}>
    <img
      src="/images/photo.jpg"
      alt="photo"
      style={{ width: '95px', height: '95px', borderRadius: '50%' }}
    />
    <div style={{ margin: '20px 0' }}>
      <h3 style={{ textAlign: 'left', fontSize: '1.5em' }}>About Me</h3>
    </div>
  </div>
  <p style={{ textAlign: 'justify', fontSize: '1.3em', maxWidth: '90%', width: '100%' }}>
    I am a passionate Colombian lawyer with a strong legal background, excelling in overseeing legal teams, managing high-profile cases, and providing crucial support during critical moments. My dedication to excellence and commitment to continuous learning define my professional approach.

    In my legal journey, I represented the State in trials, supported strategies against COVID-19 at the Ministry of Health, and played pivotal roles in the financial sector, maintaining business relationships, overseeing legal teams, and providing legal advice.

    Simultaneously, my enthusiasm for emerging skills led me to venture into development. With competencies in HTML, CSS, JavaScript, and SQL, I have expanded my horizons, merging legal expertise with the ability to create innovative technological solutions. This duality allows me to approach legal issues from a technological perspective, developing more efficient and effective legal solutions.

    My professional philosophy revolves around harnessing the transformative power of the law to positively shape societies. Leadership is grounded in collaboration and valuing the ideas of each team member. With a global perspective and an ongoing commitment to education, I am excited about the challenges and opportunities the future holds, bridging the gap between law and technology to create innovative and successful solutions.
  </p>
</div>
  );
}
