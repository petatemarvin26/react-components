import {useState} from 'react';
import {Image, Link, View} from 'components';

import {DownloadIcon} from 'assets/svg';
import {logoImage} from 'assets/images';

import styles from './.module.css';

const App: React.FC = () => {
  const [file, setFile] = useState<{
    filename: string;
    type: string;
    data: string | ArrayBuffer | Blob | null;
  }>({
    filename: '',
    type: '',
    data: null
  });

  const onConvert = (
    file: File,
    type:
      | 'readAsDataURL'
      | 'readAsText'
      | 'readAsArrayBuffer'
      | 'readAsBinaryString'
  ): Promise<string | ArrayBuffer | Blob | null> => {
    return new Promise((res) => {
      const reader = new FileReader();
      reader.onloadend = () => res(reader.result);
      reader[type](file);
    });
  };

  const onUpload = async (_file: File) => {
    const data = await onConvert(_file, 'readAsDataURL');
    setFile({filename: _file.name, type: _file.type, data});
  };

  // const onDownload = async () => {
  //   const a = document.createElement('a');
  //   a.href = file.data as string;
  //   a.download = 'file.jpg';
  //   a.click();
  // };

  return (
    <View className={styles['app']}>
      <View
        className={styles['drag-file']}
        onDrop={(e) => {
          e.preventDefault();
          [...e.dataTransfer.items].forEach((item) => {
            if (item.kind === 'file') {
              const file = item.getAsFile() as File;
              onUpload(file);
            }
          });
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
      >
        <p className={styles['text']}>
          {file.filename ? file.filename : 'DRAG YOUR FILE HERE'}
        </p>
      </View>
      <Link href={file.data as string} download='download.jpg'>
        <DownloadIcon />
        Download File
      </Link>
      <Image className={styles['image']} source={logoImage} />
    </View>
  );
};
export default App;
