export default function Section2({ register }) {
  return (
    <>
      <div>
        <label>邮箱</label>
        <input
          type="text"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
      </div>
      <div>
        <label>手机号</label>
        <input
          type="tel"
          {...register("MobileNumber", {
            required: true,
            maxLength: 11,
            minLength: 8,
          })}
        />
      </div>
    </>
  );
}
