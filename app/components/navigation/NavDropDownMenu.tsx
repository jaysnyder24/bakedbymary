export default function NavDropDownMenu({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='flex flex-col justify-start items-start w-auto min-w-[200px]'>
      {children}
    </div>
  );
}
