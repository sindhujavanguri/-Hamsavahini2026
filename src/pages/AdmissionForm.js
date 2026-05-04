import { useState } from "react";

const initialAdmissionForm = { studentName: "", parentName: "", className: "", phone: "", address: "" };

export default function AdmissionForm() {
  const [formData, setFormData] = useState(initialAdmissionForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    let nextValue = value;

    if (name === "studentName" || name === "parentName") {
      nextValue = value.replace(/[^A-Za-z ]/g, "");
    }
    if (name === "phone") {
      nextValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData((current) => ({ ...current, [name]: nextValue }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setSubmitted(false);
  };

  const submitAdmissionForm = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!formData.studentName.trim()) nextErrors.studentName = "Required";
    if (!formData.parentName.trim()) nextErrors.parentName = "Required";
    if (!formData.className.trim()) nextErrors.className = "Required";
    if (formData.phone.length < 10) nextErrors.phone = "Invalid Phone";
    if (!formData.address.trim()) nextErrors.address = "Required";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setFormData(initialAdmissionForm);
      setSubmitted(true);
    }
  };

  return (
    <form className="admission-form-grid" onSubmit={submitAdmissionForm}>
      <style>{`
        /* --- admission-form.css --- */
        
        .admission-form-grid {
          display: grid;
          /* FIX: Simplified 2-column grid for precise alignment */
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        /* FIX: Ensure specific input types span the correct width */
        .input-group.full-width {
          grid-column: span 2;
        }

        .input-group label {
          font-size: 0.85rem;
          font-weight: 700;
          color: #475569;
        }

        .input-group input, 
        .input-group textarea {
          padding: 13px 18px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          font-size: 1rem;
          transition: all 0.2s;
          background: #f8fafc;
        }

        /* Placeholders from screenshot */
        .input-group input::placeholder,
        .input-group textarea::placeholder {
          color: #94a3b8;
          opacity: 0.8;
        }

        .input-group input:focus, 
        .input-group textarea:focus {
          outline: none;
          border-color: #16645f;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(22, 100, 95, 0.1);
        }

        .error-txt {
          color: #dc2626;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .submit-btn-styled {
          background: #16645f;
          color: white;
          padding: 16px;
          border: none;
          border-radius: 10px;
          font-weight: 800;
          cursor: pointer;
          margin-top: 10px;
          grid-column: span 2; /* Spans full width */
          transition: background 0.2s;
        }

        .submit-btn-styled:hover {
          background: #114f4a;
        }

        .success-msg-box {
          background: #f0fdf4;
          color: #166534;
          padding: 15px;
          border-radius: 10px;
          font-size: 0.9rem;
          border: 1px solid #bbf7d0;
          grid-column: span 2;
        }

        /* Handle Mobile stacking */
        @media (max-width: 600px) {
          .admission-form-grid {
            grid-template-columns: 1fr;
          }
          .input-group.full-width {
            grid-column: span 1;
          }
          .submit-btn-styled,
          .success-msg-box {
            grid-column: span 1;
          }
        }
      `}</style>

      {/* Row 1 */}
      <div className="input-group">
        <label>Student Name</label>
        <input type="text" name="studentName" value={formData.studentName} onChange={updateField} placeholder="Enter name" />
        {errors.studentName && <span className="error-txt">{errors.studentName}</span>}
      </div>
      <div className="input-group">
        <label>Applying for Class</label>
        <input type="text" name="className" value={formData.className} onChange={updateField} placeholder="e.g. 6th Grade" />
        {errors.className && <span className="error-txt">{errors.className}</span>}
      </div>

      {/* Row 2 */}
      <div className="input-group">
        <label>Parent Name</label>
        <input type="text" name="parentName" value={formData.parentName} onChange={updateField} placeholder="Father/Mother name" />
        {errors.parentName && <span className="error-txt">{errors.parentName}</span>}
      </div>
      <div className="input-group">
        <label>Phone Number</label>
        <input type="tel" name="phone" value={formData.phone} onChange={updateField} placeholder="10-digit number" />
        {errors.phone && <span className="error-txt">{errors.phone}</span>}
      </div>

      {/* FIX: Row 3 spans full width */}
      <div className="input-group full-width">
        <label>Address</label>
        <textarea name="address" value={formData.address} onChange={updateField} rows="2" placeholder="Residential address" />
        {errors.address && <span className="error-txt">{errors.address}</span>}
      </div>

      {submitted && (
        <div className="success-msg-box">
          ✓ Enquiry sent successfully. Our office will contact you soon.
        </div>
      )}

      {/* FIX: Button spans full width */}
      <button className="submit-btn-styled" type="submit">Submit Admission Enquiry</button>
    </form>
  );
}