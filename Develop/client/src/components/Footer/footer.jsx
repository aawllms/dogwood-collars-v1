function Footer() {
  const styles = {
    footerStyle: {
      position: "relative", 
      bottom: 0,
      width: "100%",
      background: "black",
      color: "white",
    },
    divStyle: {
      background: "black",
      color: "white",
    },
  };
  return (
    <footer style={styles.footerStyle}>
      <div className="card text-center" style={styles.divStyle}>
        <div className="card-body">
          <p className="card-text">Every collar is handmade</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
