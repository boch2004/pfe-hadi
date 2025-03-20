import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// جلب كل الحيوانات
export const getanimal = createAsyncThunk("animal/get", async () => {
    try {
        let result = await axios.get("http://localhost:5000/animal/");
        console.log("Response:", result.data);
        return result.data; // إرجاع البيانات بدلاً من Promise
    } catch (error) {
        console.log(error);
        throw error; // لضمان رفض الطلب عند الفشل
    }
});

// إضافة حيوان جديد
export const addanimal = createAsyncThunk("animal/add", async (newanimal) => {
    try {
        let result = await axios.post("http://localhost:5000/animal/add", newanimal);
        console.log("Response:", result.data);
        return result.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});

// حذف حيوان
export const deleteanimal = createAsyncThunk("animal/delete", async (id) => {
    try {
        let result = await axios.delete(`http://localhost:5000/animal/${id}`);
        console.log("Response:", result.data);
        return id; // إرجاع الـ ID المحذوف لتحديث القائمة
    } catch (error) {
        console.log(error);
        throw error;
    }
});

// تعديل حيوان
export const editanimal = createAsyncThunk("animal/edit", async ({ id, edited }) => {
    try {
        let result = await axios.put(`http://localhost:5000/animal/${id}`, edited);
        console.log("Response:", result.data);
        return result.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});

// الحالة الابتدائية
const initialState = {
    animalList: [],
    status: null,
};

export const animalSlice = createSlice({
    name: "animal",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // حالة جلب الحيوانات
            .addCase(getanimal.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getanimal.fulfilled, (state, action) => {
                state.status = "success";
                state.animalList = action.payload.animals; // تأكد أن `animals` موجود في البيانات القادمة من الـ API
            })
            .addCase(getanimal.rejected, (state) => {
                state.status = "fail";
            })

            // حالة إضافة حيوان
            .addCase(addanimal.pending, (state) => {
                state.status = "loading";
            })
            .addCase(addanimal.fulfilled, (state, action) => {
                state.status = "success";
                state.animalList.push(action.payload.animal); // إضافة العنصر الجديد للقائمة
            })
            .addCase(addanimal.rejected, (state) => {
                state.status = "fail";
            })

            // حالة حذف حيوان
            .addCase(deleteanimal.pending, (state) => {
                state.status = "loading";
            })
            .addCase(deleteanimal.fulfilled, (state, action) => {
                state.status = "success";
                state.animalList = state.animalList.filter(animal => animal._id !== action.payload);
            })
            .addCase(deleteanimal.rejected, (state) => {
                state.status = "fail";
            })

            // حالة تعديل حيوان
            .addCase(editanimal.pending, (state) => {
                state.status = "loading";
            })
            .addCase(editanimal.fulfilled, (state, action) => {
                state.status = "success";
                state.animalList = state.animalList.map(animal =>
                    animal._id === action.payload.animal._id ? action.payload.animal : animal
                );
            })
            .addCase(editanimal.rejected, (state) => {
                state.status = "fail";
            });
    },
});

// تصدير الـ Reducer
export default animalSlice.reducer;
