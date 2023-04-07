import { useRouter } from "next/router";
import Sign from "@/components/Sign";
import { signs } from "@/constants/signs";

function SignDetails() {
  const router = useRouter();
  const signId = router.query.signId;
  const currentSign = signs.find((sign) => sign.id === signId);
  return currentSign ? (
    <>
      <Sign {...currentSign}></Sign>
    </>
  ) : null;
}
export default SignDetails;
