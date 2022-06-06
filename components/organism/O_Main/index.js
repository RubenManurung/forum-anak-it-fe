import React, { useState, useEffect } from "react";
import { FIVE_TOP_DISCUSSION } from "./constant";
import Comment from "../../../services/comments.json";
import Image from "next/image";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import FormInput from "@components/molecules/FormInput";
import PrimaryButton from "@components/atom/PrimaryButton";
import SecondaryButton from "@components/atom/SecondaryButton";
import Link from "next/link";
import {
  Main,
  VoteArrow,
  LinkDiscussion,
  SubMain,
  StyledFieldSet,
  StyledLegend,
  CommentSection,
  ImageContainer,
  Aside,
  ContainerDiscussion,
  NumberDiscussion,
} from "./style";

const Index = () => {
  const [dataComment, setDataComment] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [errorValidation, setErrorValidation] = useState({});
  const [commentList, setCommentList] = useState();
  const [_id, set_Id] = useState("");

  useEffect(() => {
    setCommentList([...Comment]);
  }, []);

  const validationComment = (data) => {
    let errorValidation = {};

    if (!data.name) {
      errorValidation.name = "wajib diisi";
    }

    if (!data.email) {
      errorValidation.email = "wajib diisi";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
      errorValidation.email = "format email salah";
    }

    if (!data.comment) {
      errorValidation.comment = "wajib diisi";
    }

    if (Object.keys(errorValidation).length === 0) {
      window.location.reload();
    }

    return errorValidation;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDataComment({
      ...dataComment,
      [name]: value,
    });
  };

  const handleReset = () => {
    setDataComment({
      name: "",
      email: "",
      comment: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorValidation(validationComment(dataComment));
  };

  const getAddIdx = (idx, id) => {
    const newArr = commentList.map((p, i, arr) =>
      p.point === Comment[idx].point ? { ...p, point: p.point + 1 } : { ...p }
    );
    setCommentList(newArr);
  };

  const getMinIdx = (idx, id) => {
    const newArr = commentList.map((p, i, arr) =>
      p.point === Comment[idx].point ? { ...p, point: p.point - 1 } : { ...p }
    );
    setCommentList(newArr);
  };

  const getSubAddIndex = (pIndex, cIndex, pId, cId) => {
    const newArr = commentList.map((p, i, arr) =>
      p.id === Comment[pIndex].id &&
      p.replies[cIndex].point === Comment[pIndex].replies[cIndex].point
        ? {
            ...p,
            replies: p.replies.map((val, idx, arr) =>
              val.point === Comment[pIndex].replies[cIndex].point &&
              val.id === Comment[pIndex].replies[cIndex].id
                ? { ...val, point: val.point + 1 }
                : { ...val }
            ),
          }
        : { ...p }
    );
    setCommentList(newArr);
  };

  const getSubMinIndex = (pIndex, cIndex, id) => {
    const newArr = commentList.map((p, i, arr) =>
      p.id === Comment[pIndex].id &&
      p.replies[cIndex].point === Comment[pIndex].replies[cIndex].point
        ? {
            ...p,
            replies: p.replies.map((val, idx, arr) =>
              val.point === Comment[pIndex].replies[cIndex].point &&
              val.id === Comment[pIndex].replies[cIndex].id
                ? { ...val, point: val.point - 1 }
                : { ...val }
            ),
          }
        : { ...p }
    );
    setCommentList(newArr);
  };

  return (
    <Main>
      <SubMain>
        <StyledFieldSet>
          <StyledLegend>
            <h1>
              Lampu webcam tiba-tiba menyala sendiri tanpa membuka aplikasi
              webcam
            </h1>
          </StyledLegend>

          <br />
          <p>
            Mau tanya, akhir-akhir ini webcam sering nyala sendiri. Apakah ada
            yang tau penyebabnya dan solusi untuk memperbaiki hal itu? Apakah
            ada kemungkinana laptop saya di-hack karena kasus terjadi tiap
            terkoneksi di internet.
          </p>
        </StyledFieldSet>
        <br />
        <form>
          <StyledFieldSet>
            <StyledLegend>
              <h2>Komentar &nbsp;&nbsp;</h2>
            </StyledLegend>
            {commentList?.map((comment, idx) => {
              return (
                <React.Fragment key={idx}>
                  <CommentSection>
                    <ImageContainer>
                      <img
                        key={comment?.id}
                        src={`/images/logo.png`}
                        width={100}
                        height={100}
                      />
                    </ImageContainer>
                    <article>
                      <h4>{comment?.author}</h4>
                      <small>
                        {moment(comment?.date).format("DD MMM YYYY  h:mm")}
                      </small>
                      <p style={{ fontSize: 13 }}>{comment?.message}</p>

                      <span>
                        {comment?.point} point{" "}
                        <VoteArrow
                          isup={true}
                          isClicked={Comment[idx].point < comment?.point}
                          icon={faArrowUp}
                          onClick={() => {
                            set_Id(comment?.id);
                            getAddIdx(idx, comment?.id);
                          }}
                        />
                        <VoteArrow
                          isup={false}
                          icon={faArrowDown}
                          isClickedDown={Comment[idx].point > comment?.point}
                          onClick={() => {
                            set_Id(comment?.id);
                            getMinIdx(idx, comment?.id);
                          }}
                        />
                      </span>
                    </article>
                  </CommentSection>
                  {comment?.replies?.map((reply, index) => {
                    return (
                      <CommentSection key={reply.id} subComment={true}>
                        <div style={{ margin: 20 }}>
                          <img
                            src={`/images/logo.png`}
                            width={50}
                            height={50}
                          />
                        </div>
                        <article style={{ margin: "20px 0px" }}>
                          <h4>{reply.author}</h4>
                          <small>
                            {moment(reply.date).format("DD MMM YYYY  h:mm")}
                          </small>
                          <p style={{ fontSize: 13 }}>{reply.message}</p>

                          <span>
                            {reply.point} point{" "}
                            <VoteArrow
                              icon={faArrowUp}
                              isup={true}
                              isClicked={
                                Comment[idx].replies[index].point < reply?.point
                              }
                              onClick={() => {
                                getSubAddIndex(
                                  idx,
                                  index,
                                  comment.id,
                                  reply.id
                                );
                              }}
                            />
                            <VoteArrow
                              isup={false}
                              icon={faArrowDown}
                              isClickedDown={
                                Comment[idx].replies[index].point > reply?.point
                              }
                              onClick={() => {
                                getSubMinIndex(
                                  idx,
                                  index,
                                  comment.id,
                                  reply.id
                                );
                              }}
                            />
                          </span>
                        </article>
                      </CommentSection>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </StyledFieldSet>
        </form>

        <form onSubmit={handleSubmit}>
          <StyledFieldSet>
            <StyledLegend>
              <h2>Tambahkan Komentar &nbsp;&nbsp;</h2>
            </StyledLegend>

            <FormInput
              title={""}
              inputPlaceHolder="Nama"
              inputName="name"
              inputType="text"
              value={dataComment.name}
              errorInput={!!errorValidation.name}
              validateInputError={errorValidation.name}
              onChange={handleChange}
            />
            <FormInput
              inputPlaceHolder="Email"
              inputName="email"
              inputType="text"
              value={dataComment.email}
              errorInput={!!errorValidation.email}
              validateInputError={errorValidation.email}
              onChange={handleChange}
            />
            <FormInput
              inputPlaceHolder="Komentar Anda"
              inputName="comment"
              inputType="text"
              value={dataComment.comment}
              errorInput={!!errorValidation.comment}
              validateInputError={errorValidation.comment}
              onChange={handleChange}
            />
            <SecondaryButton type="button" onClick={handleReset}>
              Reset
            </SecondaryButton>
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </StyledFieldSet>
        </form>
      </SubMain>

      <Aside>
        <h2>Diskusi 5 Teratas</h2>
        <ol style={{ listStyleType: "none" }}>
          {FIVE_TOP_DISCUSSION.map((value, index) => {
            return (
              <ContainerDiscussion key={index}>
                <NumberDiscussion>{`${index + 1} `}</NumberDiscussion>
                <Link href="/">
                  <LinkDiscussion>
                    <li
                      style={{
                        margin: "16px 0px 16px 4px",
                      }}
                    >
                      {value}
                    </li>
                  </LinkDiscussion>
                </Link>
              </ContainerDiscussion>
            );
          })}
        </ol>
      </Aside>
    </Main>
  );
};

export default Index;
