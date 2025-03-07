export default function FormInput(props: any) {
  const { validation: any, invalid,  ...inputProps } = props;

  return <input {...inputProps} data-invalid = { invalid } />;
}

