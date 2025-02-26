import { useForm, FormProvider, useFormContext, SubmitHandler } from 'react-hook-form';

type Inputs = {
  data: string;
};
export function App() {
  const methods = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <InputComponent />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
}

function InputComponent() {
  const { register } = useFormContext();

  return (
    <input {...register('exampleInput')} placeholder="Nhập dữ liệu" />
  );
}
