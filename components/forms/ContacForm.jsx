import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
// import CircularProgress from "@mui/material/CircularProgress";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button } from '@mui/material';

const schema = yup
  .object()
  .shape({
    from: yup.string().email().max(60).required(),
    subject: yup.string().max(300).required(),
    message: yup.string().max(50000).required(),
  })
  .required();

const defaults = {
  from: '',
  subject: '',
  message: '',
};

export default function ContactForm({ submitHandler }) {
  // console.log(car);

  const {
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
    reset,
    control,
    formState,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: defaults,
  });

  useEffect(() => {
    console.log(formState);
  });

  const formRowStyle = {
    marginBlockEnd: '1em',
  };

  let submitFn = (vals) => {
    reset();
    console.log(vals);
    submitHandler(vals);
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(submitFn)}>
      <div style={formRowStyle}>
        <Controller
          control={control}
          name="from"
          defaultValue={''}
          render={({ field }) => (
            <TextField
              type="text"
              {...field}
              label="from"
              fullWidth
              error={!!errors.from}
              helperText={errors.from?.message}
            />
          )}
        />
      </div>
      <div style={formRowStyle}>
        <Controller
          control={control}
          name="subject"
          defaultValue={''}
          render={({ field }) => (
            <TextField
              type="text"
              fullWidth
              error={!!errors.subject}
              {...field}
              label="subject"
              // pattern={/[0-9]{1,4}/}
              helperText={errors.subject?.message}
            />
          )}
        />
      </div>

      <div style={formRowStyle}>
        <Controller
          control={control}
          name="message"
          defaultValue={''}
          render={({ field }) => (
            <TextField
              type="temessagext"
              error={!!errors.message}
              {...field}
              label="message"
              fullWidth
              multiline
              rows={8}
              helperText={errors.message?.message}
            />
          )}
        />
      </div>

      <div style={{ marginTop: 20 }} >
        <Button
          type="reset"
          onClick={() => reset()}
          variant="contained"
          sx={{ mr: 2 }}
          disabled={!isDirty}
        >
          Reset
        </Button>
        <Button
          type="submit"
          primary="true"
          variant="contained"
          disabled={isSubmitting || !isDirty || (isDirty && !isValid)}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
