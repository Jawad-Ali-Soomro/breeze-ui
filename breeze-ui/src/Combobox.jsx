import React, { useState } from 'react';
import { BiCheck } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { HiChevronUpDown } from 'react-icons/hi2';

const Combobox = ({ 
  options, 
  placeholder = "Select an option...", 
  emptyText = "No options found.",
  style = {},
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
    setSearchTerm("");
    if (onSelect) {
      onSelect(value);
    }
  };

  const containerStyle = {
    position: 'relative',
    width: '100%',
    ...style
  };

  const triggerStyle = {
    display: 'flex',
    height: '40px',
    width: 'calc(100% - 26px)',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#fff',
    padding: '0px 12px',
    fontSize: '14px',
    outline: 'none',
    cursor: 'pointer'
  };

  const dropdownStyle = {
    position: 'absolute',
    zIndex: 50,
    marginTop: '4px',
    width: 'calc(100% - 2px)',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden'
  };

  const inputStyle = {
    width: '100%',
    padding: '8px 12px',
    border: 'none',
    borderBottom: '1px solid #e2e8f0',
    outline: 'none',
    fontSize: '14px'
  };

  const optionStyle = {
    padding: '8px 12px',
    cursor: 'pointer',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center'
  };

  const optionHoverStyle = {
    backgroundColor: '#f8fafc'
  };

  const checkIconStyle = {
    marginRight: '8px',
    color: '#3b82f6'
  };

  const emptyStyle = {
    ...optionStyle,
    color: '#64748b'
  };

  return (
    <div style={containerStyle}>
      <div 
        style={triggerStyle}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span style={{ color: selectedValue ? '#000' : '#64748b' }}>
          {selectedValue 
            ? options.find(opt => opt.value === selectedValue)?.label 
            : placeholder}
        </span>
        <HiChevronUpDown size={16} style={{ opacity: 0.5 }} />
      </div>

      {isOpen && (
        <div style={dropdownStyle}>
          <input
            type="text"
            placeholder="Search..."
            style={inputStyle}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
          <div style={{ maxHeight: '240px', overflowY: 'auto' }}>
            {filteredOptions.length > 0 ? (
              filteredOptions.map(option => (
                <div
                  key={option.value}
                  style={{
                    ...optionStyle,
                    ...(option.value === selectedValue ? optionHoverStyle : {})
                  }}
                  onClick={() => handleSelect(option.value)}
                >
                  {option.value === selectedValue && (
                    <BiCheck size={16} style={checkIconStyle} />
                  )}
                  {option.label}
                </div>
              ))
            ) : (
              <div style={emptyStyle}>
                {emptyText}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};


Combobox.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string,
  emptyText: PropTypes.string,
  style: PropTypes.object,
  onSelect: PropTypes.func,
};

export default Combobox;