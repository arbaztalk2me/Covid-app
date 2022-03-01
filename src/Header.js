const Header = ({name,bordervalue,textvalue,india}) => {
  return <div className="card border-success mb-3" >
  <div className={`card-header bg-transparent ${textvalue} ${bordervalue}`}>{name}</div>
  <div className={`card-body ${textvalue}`}>
    <h5 className="card-title">{india}</h5>
    
  </div>
  
</div>;
}
export default Header;
