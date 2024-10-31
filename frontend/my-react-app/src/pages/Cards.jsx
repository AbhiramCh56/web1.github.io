const Card = ({ title, content, titleLevel }) => {
  const TitleTag = titleLevel;

  return (
    <div className="card">
      <TitleTag>{title}</TitleTag>
      <ul>
        {content.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
