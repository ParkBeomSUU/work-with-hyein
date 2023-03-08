import Recipt from '../Button/Receipt';
import "./Recipt.css";

function ReciptModal({ setModalOpen, id, title, content, writer }) {
    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className='ModalSize' >
        
            <p>영수증 만든 겁니다..</p>


            <button onClick={closeModal}>
                X
            </button>
        </div>
    );
}
export default ReciptModal;
