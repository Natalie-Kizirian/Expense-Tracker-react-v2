function Header({ balance }) {
  return (
    <div className="flex items-center justify-between lg:w-1/2">
      <div>Hello User</div>

      <div>
        <p>Total Balance</p>
        <p className="text-center">{balance}€</p>
      </div>
    </div>
  );
}
export default Header;
