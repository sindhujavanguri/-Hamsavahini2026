import { useState, useRef, useEffect } from "react";

const initialMessages = [
  { from: "bot", text: "Thanks for reaching Hamsavahini School. How can we help you today?" }
];

const quickButtons = [
  { label: "Admissions", key: "admission" },
  { label: "Fees", key: "fee" },
  { label: "Timings", key: "timing" },
  { label: "Transport", key: "transport" },
  { label: "Contact", key: "contact" },
];

function getReply(text) {
  const t = text.toLowerCase();
  if (t.includes("admission") || t.includes("apply") || t.includes("join")) {
    return "For admissions, please share the student name, class, parent name, and phone number. The school office can guide you with available classes and required documents.";
  }
  if (t.includes("fee") || t.includes("fees")) {
    return "For fee details, please contact the school office directly. Fees can depend on class and admission details.";
  }
  if (t.includes("time") || t.includes("timing") || t.includes("hours")) {
    return "School timings:\n• Classes: 9:00 AM – 4:00 PM\n• Office: 9:00 AM – 5:00 PM\n• Working days: Monday to Saturday\n• Kindergarten timings may vary slightly.";
  }
  if (t.includes("transport") || t.includes("bus") || t.includes("van")) {
    return "Transport details can be confirmed with the school office based on your village or pickup location. We cover Kobbarichetlapeta and nearby villages.";
  }
  if (t.includes("phone") || t.includes("contact") || t.includes("call")) {
    return "You can contact the school office at 8008546300 for admissions, visits, and general enquiries.";
  }
  return "Thank you for your message. The school office can help with admissions, class details, visits, contact information, and general enquiries.";
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const addMessage = (userText) => {
    if (!userText.trim()) return;
    setMessages((current) => [
      ...current,
      { from: "user", text: userText },
      { from: "bot", text: getReply(userText) },
    ]);
    setInput("");
  };

  const sendMessage = (event) => {
    event.preventDefault();
    addMessage(input);
  };

  const handleQuickButton = (btn) => {
    addMessage(btn.label);
  };

  return (
    <div className="chat-widget">
      <style>{`
        .chat-widget {
          position: fixed;
          right: 24px;
          bottom: 24px;
          z-index: 70;
        }

        .chat-toggle {
          width: 58px;
          height: 58px;
          display: inline-grid;
          place-items: center;
          border: 0;
          border-radius: 999px;
          background: #d84b22;
          color: #ffffff;
          cursor: pointer;
          box-shadow: 0 14px 28px rgba(216, 75, 34, 0.26);
          animation: chat-float 1.4s ease-in-out infinite;
        }

        .chat-toggle svg {
          width: 28px;
          height: 28px;
          fill: none;
          stroke: currentColor;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 2.2;
        }

        @keyframes chat-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .chat-modal {
          position: absolute;
          right: 0;
          bottom: 76px;
          width: min(360px, calc(100vw - 32px));
          overflow: hidden;
          border: 1px solid #d6e3de;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 24px 70px rgba(24, 34, 49, 0.24);
        }

        .chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 16px 18px;
          background: #16645f;
          color: #ffffff;
        }

        .chat-header strong {
          display: block;
          font-size: 1rem;
        }

        .chat-header span {
          display: block;
          margin-top: 3px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 0.82rem;
          font-weight: 700;
        }

        .chat-close {
          width: 32px;
          height: 32px;
          border: 0;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.14);
          color: #ffffff;
          cursor: pointer;
          font-size: 1.2rem;
          font-weight: 900;
          line-height: 1;
        }

        .chat-messages {
          max-height: 300px;
          display: grid;
          gap: 10px;
          overflow-y: auto;
          padding: 16px;
          background: #f8faf7;
        }

        .chat-message {
          width: fit-content;
          max-width: 84%;
          padding: 10px 12px;
          border-radius: 10px;
          color: #182231;
          font-size: 0.92rem;
          line-height: 1.55;
          white-space: pre-line;
        }

        .chat-message.bot {
          justify-self: start;
          background: #ffffff;
          border: 1px solid #d6e3de;
        }

        .chat-message.user {
          justify-self: end;
          background: #16645f;
          color: #ffffff;
        }

        /* Quick reply buttons */
        .chat-quick-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          padding: 10px 12px 4px;
          background: #ffffff;
          border-top: 1px solid #e8f0ee;
        }

        .chat-quick-btn {
          border: 1.5px solid #16645f;
          border-radius: 999px;
          background: #ffffff;
          color: #16645f;
          font-size: 0.8rem;
          font-weight: 800;
          padding: 5px 13px;
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease, transform 0.15s ease;
          white-space: nowrap;
        }

        .chat-quick-btn:hover {
          background: #16645f;
          color: #ffffff;
          transform: translateY(-1px);
        }

        .chat-form {
          display: flex;
          gap: 8px;
          padding: 10px 12px 12px;
          background: #ffffff;
        }

        .chat-form input {
          min-width: 0;
          flex: 1;
          border: 1px solid #ccd8d4;
          border-radius: 8px;
          padding: 11px 12px;
          color: #182231;
          font: inherit;
          outline: none;
        }

        .chat-form input:focus {
          border-color: #5aa9ad;
          box-shadow: 0 0 0 3px rgba(90, 169, 173, 0.18);
        }

        .chat-form button {
          border: 0;
          border-radius: 8px;
          padding: 0 15px;
          background: #d84b22;
          color: #ffffff;
          cursor: pointer;
          font: inherit;
          font-weight: 900;
        }

        @media (max-width: 620px) {
          .chat-widget { right: 14px; bottom: 14px; }
          .chat-modal { bottom: 70px; }
        }
      `}</style>

      {isOpen && (
        <div className="chat-modal" role="dialog" aria-modal="false" aria-label="School chat">
          <div className="chat-header">
            <div>
              <strong>School Chat</strong>
              <span>Hamsavahini School</span>
            </div>
            <button className="chat-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close chat">
              ✕
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((message, index) => (
              <div className={`chat-message ${message.from}`} key={`${message.from}-${index}`}>
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick reply buttons */}
          <div className="chat-quick-btns">
            {quickButtons.map((btn) => (
              <button
                key={btn.key}
                className="chat-quick-btn"
                type="button"
                onClick={() => handleQuickButton(btn)}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <form className="chat-form" onSubmit={sendMessage}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type your message"
              aria-label="Type your message"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}

      <button
        className="chat-toggle"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label="Open chat"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.8 8.8 0 0 1-3.7-.8L3 20l1.2-4.5A8.2 8.2 0 0 1 3 11.5a8.5 8.5 0 0 1 18 0Z" />
          <path d="M8 11h.01" />
          <path d="M12 11h.01" />
          <path d="M16 11h.01" />
        </svg>
      </button>
    </div>
  );
}