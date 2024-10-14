import { Avatar,
    Typography,
    Container
  } from '@material-ui/core'; 
export default function AvatarWithText() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center  gap-4">
      <img className='h-36 w-auto'  src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
        <div>
          <Typography variant="h6">Tania Andrew</Typography>
          <Typography  className="font-normal w-auto text-gray-700">
                        Web Developer
          </Typography>
        </div>
      </div>
    </div>
  );
}