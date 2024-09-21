import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import SocialLinkList from '../social/SocialLinkList';
import SocialLinkInput from '../social/SocialLinkInput';
import FormButton from '../elements/FormButton';

interface SocialFormProps {
  socialAccounts: {
    links: { type: string; url: string; title: string }[];
  };
  setSocialAccounts: React.Dispatch<React.SetStateAction<any>>;
}

const SocialForm: React.FC<SocialFormProps> = ({ socialAccounts, setSocialAccounts }) => {
  const [showInput, setShowInput] = useState(true); // Form input alanını her zaman gösterecek şekilde ayarlandı.
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  

  const handleAddLink = (newLink: { type: string; url: string; title: string }) => {
    let newLinks;
    if (editingIndex !== null) {
      newLinks = [...socialAccounts.links];
      newLinks[editingIndex] = newLink; // Eski linki düzenlenen link ile değiştir.
      setEditingIndex(null); // Düzenleme modundan çık.
    } else {
      newLinks = socialAccounts.links.concat(newLink); // Yeni link ekleniyor.
    }
    setSocialAccounts({ ...socialAccounts, links: newLinks });
    setShowInput(true); // Form alanını açık tut.
  };

  const handleEditLink = (index: number) => {
    setEditingIndex(index);
    setShowInput(true);
  };

  const handleDeleteLink = (index: number) => {
    const newLinks = socialAccounts.links.filter((_, i) => i !== index); // İlgili indeksi filtrele.
    setSocialAccounts({ ...socialAccounts, links: newLinks });
  };
  

  return (
    <div className="px-6 py-2 lg:px-8">
      <Formik
        initialValues={socialAccounts}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          console.log('Submitted values:', values);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="p-6 m-4 grid gap-y-4 max-w-xl mx-auto rounded-md">
            <SocialLinkList
              links={socialAccounts.links}
              onEdit={handleEditLink}
              onDelete={handleDeleteLink}
            />
            {showInput && (
              <SocialLinkInput
                editingIndex={editingIndex}
                onAddLink={handleAddLink}
                onCancel={() => setShowInput(false)} // Eğer input alanını gizlemek isterseniz burayı ayarlayabilirsiniz
                existingLink={editingIndex !== null ? socialAccounts.links[editingIndex] : undefined}
              />
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SocialForm;
