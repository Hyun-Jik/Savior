import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Norecommend(props) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center my-[20vh] mx-[10vw] w-[80vw] h-[60vh]">
      <div className="box-border grid w-[200px] h-[300px] text-[#ffffff] mx-[2%] bg-[#fb923c] text-center rounded-[20px]">
        {props.profile === null ? (
          <img
            src="/blank-profile.png"
            alt="profile"
            className="w-[200px] h-[200px] object-cover rounded-tl-[20px] rounded-tr-[20px]"
          />
        ) : (
          <img
            src={props.profile}
            alt="profile"
            className="w-[200px] h-[200px] object-cover rounded-tl-[20px] rounded-tr-[20px]"
          />
        )}
        {props.name === null ? (
          <div className="mt-[1vh] mb-[1vh]">
            안녕하세요!
          </div>
        ) : (
          <div className="mt-[1vh] mb-[1vh] bg-[#ea580c] border-[#ea580c]">
            <div>안녕하세요!</div>
            <div>{props.name}님</div>
          </div>
        )}
      </div>
      <div className="box-border w-1/2 h-[300px] bg-[#fb923c] mx-[2%] rounded-lg flex flex-col justify-center items-center">
        <h2 className='text-white'>추천 복지가 없습니다.</h2>
        <div>
          <Button
            className="bg-[#ea580c] border-[#ea580c]"
            onClick={() => {
              navigate("/filter");
            }}
          >
            맞춤필터 설정하러가기
          </Button>
        </div>
      </div>
    </div>
  );
};
