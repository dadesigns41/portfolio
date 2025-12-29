function CTAButton({ text, href }) {
  return (
    <a
      href={href}
      style={{
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        marginTop: '10px',
      }}
    >
      {text}
    </a>
  );
}

export default CTAButton;
