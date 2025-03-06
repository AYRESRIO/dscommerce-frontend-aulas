export default function FormInput(props: any) {
  const { validation: any, ...inputProps } = props;

  return <input {...inputProps} />;
}
