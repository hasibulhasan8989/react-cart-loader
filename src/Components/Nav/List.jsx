

const List = ({route}) => {
    return (
       <li className="mr-10 hover:bg-[#EC5228] p-2 rounded-xl font-semibold">
        <a href={route.path}>{route.name}</a>

       </li>
    );
};

export default List;