import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../auth/authSlice";
import {
  checkIsAllowedFileSize,
  checkIsAllowedFileType,
} from "../../../../common/checkIsAllowedFile";
import {
  ProfilePicture,
  ShadowBackdrop,
  ImageWrapper,
  FileInput,
  AddIcon,
  UpdateForm,
  UpdateFileButton,
  ProfilePlaceholder,
  UpdateGrid,
  FileInfo,
  UserNameInput,
} from "./styled";
import { auth, storage } from "../../../../config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { Wrapper } from "../../../../common/Wrapper";

const UpdateGeneralInfo = () => {
  const [fileError, setFileError] = useState(false);
  const [file, setFile] = useState(null);

  const user = useSelector(selectUser);
  const [newUserName, setNewUserName] = useState(user.displayName);

  const currentUser = auth.currentUser;

  const onInputChange = ({ target }) => {
    const inputFile = target.files[0];

    if (
      checkIsAllowedFileType(inputFile.type) &&
      checkIsAllowedFileSize(inputFile.size)
    ) {
      setFile(inputFile);
      setFileError(false);
    } else {
      setFile(null);
      setFileError(true);
    }
  };

  const getUrl = async () => {
    const uniqueName = `${file.name}${v4()}`;
    const storageRef = ref(
      storage,
      `profile/${auth.currentUser.uid}/${uniqueName}`
    );

    const snapshot = await uploadBytes(storageRef, file);
    const photoURL = await getDownloadURL(snapshot.ref);
    return photoURL;
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const trimmedName = newUserName.trim();

    if (trimmedName === "") return;

    if (file) {
      try {
        const photoURL = await getUrl();

        await updateProfile(currentUser, {
          photoURL,
          displayName: trimmedName,
        });

        window.location.reload();
      } catch (error) {
        toast.error("Couldn't update. Try refreshing app.");
      }
    } else {
      try {
        await updateProfile(currentUser, {
          photoURL: currentUser.photoURL,
          displayName: trimmedName,
        });
        window.location.reload();
      } catch (error) {
        toast.error("Couldn't update. Try refreshing app.");
      }
    }
  };

  return (
    <Wrapper>
      <UpdateForm onSubmit={onFormSubmit}>
        <UpdateGrid>
          <label>
            <ImageWrapper>
              {auth.currentUser.photoURL ? (
                <ProfilePicture src={auth.currentUser.photoURL} />
              ) : (
                <ProfilePlaceholder />
              )}
              <AddIcon />
              <ShadowBackdrop />
            </ImageWrapper>

            {file ? (
              <FileInfo>
                {file.name.slice(15) === ""
                  ? file.name.slice(0, 15)
                  : `${file.name.slice(0, 15)}...`}
              </FileInfo>
            ) : fileError ? (
              <FileInfo error>Wrong file format/size</FileInfo>
            ) : (
              <FileInfo>Choose jpeg/png file ( max 2MB )</FileInfo>
            )}
            <FileInput type="file" onChange={onInputChange} />
          </label>

          <label>
            <span>Username</span>
            <UserNameInput
              value={newUserName}
              onChange={({ target }) => setNewUserName(target.value)}
              required
            />
          </label>
        </UpdateGrid>

        <UpdateFileButton>Update (will reload app)</UpdateFileButton>
      </UpdateForm>
    </Wrapper>
  );
};

export default UpdateGeneralInfo;
