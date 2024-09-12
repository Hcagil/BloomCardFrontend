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
  const [showInput, setShowInput] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  useEffect(() => {
    const savedSocialAccounts = localStorage.getItem('socialAccounts');
    if (savedSocialAccounts) {
      setSocialAccounts(JSON.parse(savedSocialAccounts));
    }
  }, [setSocialAccounts]);

  const handleAddLink = (newLink: { type: string; url: string; title: string }) => {
    let newLinks;
    if (editingIndex !== null) {
      newLinks = [...socialAccounts.links];
      newLinks[editingIndex] = newLink;
      setEditingIndex(null);
    } else {
      newLinks = socialAccounts.links.concat(newLink);
    }
    setSocialAccounts({ ...socialAccounts, links: newLinks });
    setShowInput(false);
  };

  const handleEditLink = (index: number) => {
    setEditingIndex(index);
    setShowInput(true);
  };

  const handleDeleteLink = (index: number) => {
    const newLinks = socialAccounts.links.filter((_, i) => i !== index);
    setSocialAccounts({ ...socialAccounts, links: newLinks });
    
  };

  return (
    <div className="px-6 py-2 lg:px-8">
      <Formik
        initialValues={socialAccounts}
        onSubmit={(values, { setSubmitting }) => {
          // İşlem bittikten sonra isSubmitting'i false yapar.
          setSubmitting(false);
          console.log('Submitted values:', values);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="p-6 m-4 grid gap-y-4 max-w-xl mx-auto  rounded-md">
            <SocialLinkList
              links={socialAccounts.links}
              onEdit={handleEditLink}
              onDelete={handleDeleteLink}
            />
            {!showInput && (
              <FormButton
                text="Yeni Link Ekle"
                onClick={() => setShowInput(true)}
                isSubmitting={isSubmitting}
                type="button"
              />
            )}
            {showInput && (
              <SocialLinkInput
                editingIndex={editingIndex}
                onAddLink={handleAddLink}
                onCancel={() => setShowInput(false)}
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
