export interface FormBannerData {
  message: string;
  state: 'success' | 'error';
}

interface Props {
  banner: FormBannerData;
}

const FormBanner = ({ banner: { message, state } }: Props) => {
  const isSuccess = state === 'success';
  const stateIcon = isSuccess ? '✅' : '❌';

  return (
    <p
      className={`mb-2 w-full rounded-xl p-2 text-center ${
        isSuccess ? 'bg-green-300' : 'bg-red-300'
      }`}
    >{`${stateIcon} ${message}`}</p>
  );
};

export default FormBanner;
