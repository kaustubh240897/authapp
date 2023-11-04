import InputField from "@/components/common/InputField";
import TextButton from "@/components/common/TextButton";
import EmailIcon from "@/public/images/mail-line.svg";
import BackArrowIcon from "@/public/images/arrow-left.svg";
import UserIcon from "@/public/images/user-line.svg";
import CompanyIcon from "@/public/images/building-4-line.svg";
import TwitterIcon from "@/public/images/twitter-x-line.svg";
import GithubIcon from "@/public/images/github-icon.svg";
import Image from "next/image";
import Link from "next/link";

export default function ContactDetailForm() {
  return (
    <div className="mx-20 my-4">
      <Link href="/">
        <div>
          <Image src={BackArrowIcon} alt="backIcon" />
        </div>
      </Link>
      <div className="my-6">
        <h2 className="text-lg font-semibold">Contact Details</h2>
      </div>
      <InputField
        src={UserIcon}
        label={"Full Name"}
        placeholder={"Email Address"}
        isRequired={true}
      />

      <InputField
        src={CompanyIcon}
        label={"Company Name"}
        placeholder={"Your Company Name"}
        isRequired={true}
      />

      <InputField
        src={EmailIcon}
        label={"Website"}
        placeholder={"Your Website"}
      />
      <div className="flex">
        <InputField
          column="2"
          src={TwitterIcon}
          label={"Twitter"}
          placeholder={"eg. Website"}
        />
        <InputField
          column="2"
          src={GithubIcon}
          label={"Github"}
          placeholder={"eg. bytebreach"}
        />
      </div>
      <div>
        <InputField
          isRequired={true}
          label={"Invite Code"}
          placeholder={"1234"}
        />
      </div>
      <TextButton text={"Submit"} href="/dashboard" />
    </div>
  );
}
