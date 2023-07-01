interface Props {
  children: string;
}

const Header: React.FC<Props> = ({ children }) => {
  return (
    <div className="header">
      <section>{ children }</section>
    </div>
   );
}

export default Header;
