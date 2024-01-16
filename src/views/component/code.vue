<template>
    <div>
			code界面
        <div>
            <el-input type="text" v-model="item.text"></el-input>
        </div>
        <br/>
        <div>
            <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">

                </el-option>
            </el-select>
        </div>
        <el-button type="text" @click="dialogVisible = true">打开 Dialog</el-button>
        <el-dialog title="提示" :visible.async="dialogVisible" width="30%" :append-to-body="true">
            <el-time-picker placeholder="选择时间" v-model="date" style="width:100%">

            </el-time-picker>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default{
    props: ["item"],
    data(){
        return{
            options:[{
                value: '选项1',
                label: '黄金糕'
            },{
                value: '选项2',
                label: '双皮奶'
            }],
            value: '',
            date: '',
            dialogVisible: false,
        }
    }
}
</script>