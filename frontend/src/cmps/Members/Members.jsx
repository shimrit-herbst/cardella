import Avatar from 'react-avatar';

function Members({ members }) {
    return (
        <div className="board-avatar">
            <ul className="avatar-list flex">
                {
                    members.map(member =>
                        <li className="avatar" key={member._id}>
                            <Avatar
                                className="avatar"
                                src={member.imgUrl}
                                name={member.fullName}
                                size="30px"
                                round={true}
                                color="#dfe1e6"
                                fgColor="#333333"
                                textSizeRatio={2.5}
                            />
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Members;
