import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();

  const { errors } = formState;
  console.log(errors);
  const queryClient = useQueryClient();
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("new cabin has being created");
      queryClient.invalidateQueries["cabins"];
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  function onSubmit(data) {
    mutate(data);
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="name" error={errors?.regularPrice?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "this filed is required ",
          })}
        />
      </FormRow>
      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "this filed is required ",
            min: {
              value: 1,
              message: "minimum capacity should be 1",
            },
          })}
        />
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow>

      <FormRow label="maximum Capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "this filed is required ",
            min: {
              value: 1,
              message: "minimum capacity should be 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="regularPrice" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "this filed is required ",
            min: {
              value: 1,
              message: "minimum capacity should be 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="discount" error={errors?.discount?.message}>
        <Label htmlFor="discount">Discount</Label>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "this filed is required ",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "discount should be less than regular price",
          })}
        />
      </FormRow>

      <FormRow label="description" error={errors?.description?.message}>
        <Label htmlFor="description">Description for website</Label>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", { required: "this filed is required " })}
        />
      </FormRow>

      <FormRow label="cabin photo">
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput id="image" accept="image/*" />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Edit cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
